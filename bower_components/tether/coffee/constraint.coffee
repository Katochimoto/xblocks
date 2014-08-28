{getOuterSize, getBounds, getSize, extend, updateClasses, defer} = @Tether.Utils

MIRROR_ATTACH =
    left: 'right'
    right: 'left'
    top: 'bottom'
    bottom: 'top'
    middle: 'middle'

BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom']

getBoundingRect = (tether, to) ->
  if to is 'scrollParent'
    to = tether.scrollParent
  else if to is 'window'
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]

  if to is document
    to = to.documentElement

  if to.nodeType?
    pos = size = getBounds to
    style = getComputedStyle to

    to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top]

    for side, i in BOUNDS_FORMAT
      side = side[0].toUpperCase() + side.substr(1)
      if side in ['Top', 'Left']
        to[i] += parseFloat style["border#{ side }Width"]
      else
        to[i] -= parseFloat style["border#{ side }Width"]

  to

@Tether.modules.push
  position: ({top, left, targetAttachment}) ->
    return true unless @options.constraints

    removeClass = (prefix) =>
      @removeClass prefix
      for side in BOUNDS_FORMAT
        @removeClass "#{ prefix }-#{ side }"

    {height, width} = @cache 'element-bounds', => getBounds @element

    if width is 0 and height is 0 and @lastSize?
      # Handle the item getting hidden as a result of our positioning without glitching
      # the classes in and out
      {width, height} = @lastSize

    targetSize = @cache 'target-bounds', => @getTargetBounds()
    targetHeight = targetSize.height
    targetWidth = targetSize.width

    tAttachment = {}
    eAttachment = {}

    allClasses = [@getClass('pinned'), @getClass('out-of-bounds')]
    for constraint in @options.constraints
      allClasses.push(constraint.outOfBoundsClass) if constraint.outOfBoundsClass
      allClasses.push(constraint.pinnedClass) if constraint.pinnedClass

    for cls in allClasses
      for side in ['left', 'top', 'right', 'bottom']
        allClasses.push "#{ cls }-#{ side }"

    addClasses = []

    tAttachment = extend {}, targetAttachment
    eAttachment = extend {}, @attachment

    for constraint in @options.constraints
      {to, attachment, pin} = constraint

      attachment ?= ''

      if ' ' in attachment
        [changeAttachY, changeAttachX] = attachment.split(' ')
      else
        changeAttachX = changeAttachY = attachment

      bounds = getBoundingRect @, to

      if changeAttachY in ['target', 'both']
        if (top < bounds[1] and tAttachment.top is 'top')
          top += targetHeight
          tAttachment.top = 'bottom'

        if (top + height > bounds[3] and tAttachment.top is 'bottom')
          top -= targetHeight
          tAttachment.top = 'top'

      if changeAttachY is 'together'
        if top < bounds[1] and tAttachment.top is 'top'
          if eAttachment.top is 'bottom'
            top += targetHeight
            tAttachment.top = 'bottom'

            top += height
            eAttachment.top = 'top'
          else if eAttachment.top is 'top'
            top += targetHeight
            tAttachment.top = 'bottom'

            top -= height
            eAttachment.top = 'bottom'

        if top + height > bounds[3] and tAttachment.top is 'bottom'
          if eAttachment.top is 'top'
            top -= targetHeight
            tAttachment.top = 'top'

            top -= height
            eAttachment.top = 'bottom'
          else if eAttachment.top is 'bottom'
            top -= targetHeight
            tAttachment.top = 'top'

            top += height
            eAttachment.top = 'top'

        if tAttachment.top is 'middle'
          if top + height > bounds[3] and eAttachment.top is 'top'
            top -= height
            eAttachment.top = 'bottom'

          else if top < bounds[1] and eAttachment.top is 'bottom'
            top += height
            eAttachment.top = 'top'

      if changeAttachX in ['target', 'both']
        if (left < bounds[0] and tAttachment.left is 'left')
          left += targetWidth
          tAttachment.left = 'right'

        if (left + width > bounds[2] and tAttachment.left is 'right')
          left -= targetWidth
          tAttachment.left = 'left'

      if changeAttachX is 'together'
        if left < bounds[0] and tAttachment.left is 'left'
          if eAttachment.left is 'right'
            left += targetWidth
            tAttachment.left = 'right'

            left += width
            eAttachment.left = 'left'

          else if eAttachment.left is 'left'
            left += targetWidth
            tAttachment.left = 'right'

            left -= width
            eAttachment.left = 'right'

        else if left + width > bounds[2] and tAttachment.left is 'right'
          if eAttachment.left is 'left'
            left -= targetWidth
            tAttachment.left = 'left'

            left -= width
            eAttachment.left = 'right'

          else if eAttachment.left is 'right'
            left -= targetWidth
            tAttachment.left = 'left'

            left += width
            eAttachment.left = 'left'

        else if tAttachment.left is 'center'
          if left + width > bounds[2] and eAttachment.left is 'left'
            left -= width
            eAttachment.left = 'right'

          else if left < bounds[0] and eAttachment.left is 'right'
            left += width
            eAttachment.left = 'left'

      if changeAttachY in ['element', 'both']
        if (top < bounds[1] and eAttachment.top is 'bottom')
          top += height
          eAttachment.top = 'top'

        if (top + height > bounds[3] and eAttachment.top is 'top')
          top -= height
          eAttachment.top = 'bottom'

      if changeAttachX in ['element', 'both']
        if (left < bounds[0] and eAttachment.left is 'right')
          left += width
          eAttachment.left = 'left'

        if (left + width > bounds[2] and eAttachment.left is 'left')
          left -= width
          eAttachment.left = 'right'

      if typeof pin is 'string'
        pin = (p.trim() for p in pin.split ',')
      else if pin is true
        pin = ['top', 'left', 'right', 'bottom']
      
      pin or= []

      pinned = []
      oob = []
      if top < bounds[1]
        if 'top' in pin
          top = bounds[1]
          pinned.push 'top'
        else
          oob.push 'top'

      if top + height > bounds[3]
        if 'bottom' in pin
          top = bounds[3] - height
          pinned.push 'bottom'
        else
          oob.push 'bottom'

      if left < bounds[0]
        if 'left' in pin
          left = bounds[0]
          pinned.push 'left'
        else
          oob.push 'left'

      if left + width > bounds[2]
        if 'right' in pin
          left = bounds[2] - width
          pinned.push 'right'
        else
          oob.push 'right'

      if pinned.length
        pinnedClass = @options.pinnedClass ? @getClass('pinned')
        addClasses.push pinnedClass
        for side in pinned
          addClasses.push "#{ pinnedClass }-#{ side }"

      if oob.length
        oobClass = @options.outOfBoundsClass ? @getClass('out-of-bounds')
        addClasses.push oobClass
        for side in oob
          addClasses.push "#{ oobClass }-#{ side }"

      if 'left' in pinned or 'right' in pinned
        eAttachment.left = tAttachment.left = false
      if 'top' in pinned or 'bottom' in pinned
        eAttachment.top = tAttachment.top = false

      if tAttachment.top isnt targetAttachment.top or tAttachment.left isnt targetAttachment.left or eAttachment.top isnt @attachment.top or eAttachment.left isnt @attachment.left
        @updateAttachClasses eAttachment, tAttachment

    defer =>
      updateClasses @target, addClasses, allClasses
      updateClasses @element, addClasses, allClasses

    {top, left}
